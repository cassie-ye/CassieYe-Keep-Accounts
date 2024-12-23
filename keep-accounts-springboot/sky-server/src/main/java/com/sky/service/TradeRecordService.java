package com.sky.service;

import com.sky.dto.TradeRecordDTO;

/**
 * Author: Cassie
 * Date: 2024/12/23 14:19
 * Description:
 */
public interface TradeRecordService {

    /**
     * 新增交易记录
     *
     * @param tradeRecordDTO
     */
    void addTradeRecord(TradeRecordDTO tradeRecordDTO);
}
