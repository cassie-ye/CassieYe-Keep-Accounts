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
     * @param userId
     */
    void addTradeRecord(TradeRecordDTO tradeRecordDTO, Long userId);

    /**
     * 删除交易记录
     *
     * @param id
     * @param userId
     */
    void deleteTradeRecord(Long id, Long userId);

    /**
     * 批量删除交易记录
     *
     * @param ids
     * @param userId
     */
    void batchDeleteTradeRecord(List<Long> ids, Long userId);
}
