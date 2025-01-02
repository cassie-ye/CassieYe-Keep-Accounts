package com.sky.service.impl;

import com.sky.dto.TradeRecordDTO;
import com.sky.entity.TradeRecord;
import com.sky.mapper.TradeRecordMapper;
import com.sky.service.TradeRecordService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
     * 添加交易记录
     *
     * @param tradeRecordDTO
     */
    public void addTradeRecord(TradeRecordDTO tradeRecordDTO) {
        TradeRecord tradeRecord = new TradeRecord();
        BeanUtils.copyProperties(tradeRecordDTO, tradeRecord);
        tradeRecordMapper.insert(tradeRecord);
    }

    /**
     * 删除交易记录
     *
     * @param id
     */
    public void deleteTradeRecord(Long id) {
        tradeRecordMapper.delete(id);
    }

    public void batchDeleteTradeRecord(List<Long> ids) {
        log.info("批量删除交易记录：{}", ids);
        tradeRecordMapper.batchDelete(ids);
    }
}
