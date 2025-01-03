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

@RestController("adminTradeRecordController")
@RequestMapping("/api/admin/tradeRecord")
@Slf4j
@Api(tags = "交易记账相关接口")
public class TradeRecordController {
    @Autowired
    private TradeRecordService tradeRecordService;




}
