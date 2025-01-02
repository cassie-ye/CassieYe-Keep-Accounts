package com.sky.controller.admin;

import com.sky.dto.TradeRecordDTO;
import com.sky.result.Result;
import com.sky.service.TradeRecordService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Author: Cassie
 * Date: 2024/12/23 14:10
 * Description: 交易记账管理
 */

@RestController
@RequestMapping("/admin/tradeRecord")
@Slf4j
@Api(tags = "交易记账相关接口")
public class TradeRecordController {
    @Autowired
    private TradeRecordService tradeRecordService;

    /**
     * 新增交易记录
     *
     * @param tradeRecordDTO
     * @return
     */
    @PostMapping
    @ApiOperation("新增交易记录")
    public Result addTradeRecord(@RequestBody TradeRecordDTO tradeRecordDTO) {
        log.info("新增交易记录：{}", tradeRecordDTO);
        tradeRecordService.addTradeRecord(tradeRecordDTO);
        return Result.success("新增交易记录成功");
    }

    /**
     * 删除交易记录
     *
     * @param id
     * @return
     */
    @DeleteMapping("/{id}")
    @ApiOperation("删除交易记录")
    public Result deleteTradeRecord(@PathVariable Long id) {
        log.info("删除交易记录：{}", id);
        tradeRecordService.deleteTradeRecord(id);
        return Result.success("删除交易记录成功");
    }

    /**
     * 批量删除交易记录
     *
     * @param ids
     * @return
     */
    @DeleteMapping
    @ApiOperation("批量删除交易记录")
    public Result batchDeleteTradeRecord(@RequestParam List<Long> ids) {
        log.info("批量删除交易记录：{}", ids);
        tradeRecordService.batchDeleteTradeRecord(ids);
        return Result.success("批量删除交易记录成功");
    }
}
