package com.sky.service.impl;

import com.sky.dto.TradeRecordDTO;
import com.sky.entity.TradeRecord;
import com.sky.mapper.TradeRecordMapper;
import com.sky.service.TradeRecordService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

/**
 * Author: Cassie
 * Date: 2024/12/23 14:25
 * Description:
 */

@Service
@Slf4j
public class TradeRecordServiceImpl implements TradeRecordService {

    @Autowired
    private TradeRecordMapper tradeRecordMapper;

    /**
     * 新增交易记录
     *
     * @param tradeRecordDTO
     * @param userId
     */
    public void addTradeRecord(TradeRecordDTO tradeRecordDTO, Long userId) {
        TradeRecord tradeRecord = new TradeRecord();
        BeanUtils.copyProperties(tradeRecordDTO, tradeRecord);
        tradeRecord.setUserId(userId);
        tradeRecord.setCreateUser(userId);
        tradeRecord.setUpdateUser(userId);
        tradeRecord.setUpdateTime(LocalDateTime.now());
        tradeRecord.setCreateTime(LocalDateTime.now());
        tradeRecordMapper.insert(tradeRecord);
    }

    /**
     * 删除交易记录
     *
     * @param id
     * @param userId
     */
    public void deleteTradeRecord(Long id, Long userId) {
        // 根据主键id查询交易记录的user_id
        Long userIdInDatabase = tradeRecordMapper.getUserIdById(id);
        if (userIdInDatabase.equals(userId)) {
            tradeRecordMapper.delete(id);
        } else {
            throw new RuntimeException("删除失败，权限不足");
        }
    }

    /**
     * 批量删除交易记录
     *
     * @param ids
     * @param userId
     */
    public void batchDeleteTradeRecord(List<Long> ids, Long userId) {
        log.info("批量删除交易记录：{}", ids);
        tradeRecordMapper.batchDelete(ids);
    }
}
