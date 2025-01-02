package com.sky.service;

import com.sky.dto.TradeRecordDTO;

import java.util.List;

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

    /**
     * 删除交易记录
     *
     * @param id
     */
    void deleteTradeRecord(Long id);

    /**
     * 批量删除交易记录
     *
     * @param ids
     */
    void batchDeleteTradeRecord(List<Long> ids);
}
