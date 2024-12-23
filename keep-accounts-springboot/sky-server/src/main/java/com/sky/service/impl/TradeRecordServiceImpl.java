package com.sky.service.impl;

import com.sky.dto.TradeRecordDTO;
import com.sky.entity.TradeRecord;
import com.sky.mapper.TradeRecordMapper;
import com.sky.service.TradeRecordService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Author: Cassie
 * Date: 2024/12/23 14:25
 * Description:
 */

@Service
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
}
