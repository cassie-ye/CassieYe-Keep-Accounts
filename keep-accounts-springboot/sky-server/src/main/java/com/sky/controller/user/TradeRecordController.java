package com.sky.controller.user;

import com.sky.constant.JwtClaimsConstant;
import com.sky.dto.TradeRecordDTO;
import com.sky.properties.JwtProperties;
import com.sky.result.PageResult;
import com.sky.result.Result;
import com.sky.service.TradeRecordService;
import com.sky.utils.JwtUtil;
import io.jsonwebtoken.Claims;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

/**
 * Author: Cassie
 * Date: 2025/1/3 10:06
 * Description:
 */

@RestController("userTradeRecordController")
@RequestMapping("/api/user/tradeRecord")
@Slf4j
@Api(tags = "交易记账相关接口")
public class TradeRecordController {

    @Autowired
    private TradeRecordService tradeRecordService;

    @Autowired
    private JwtProperties jwtProperties;

    /**
     * 新增交易记录
     *
     * @param tradeRecordDTO
     * @param request
     * @return
     */
    @PostMapping
    @ApiOperation("新增交易记录")
    public Result addTradeRecord(@RequestBody TradeRecordDTO tradeRecordDTO, HttpServletRequest request) {
        log.info("新增交易记录：{}", tradeRecordDTO);
        Long userId = getUserIdFromToken(request);
        tradeRecordService.addTradeRecord(tradeRecordDTO, userId);
        return Result.success("新增交易记录成功");
    }

    /**
     * 删除交易记录
     *
     * @param id
     * @param request
     * @return
     */
    @DeleteMapping("/{id}")
    @ApiOperation("删除交易记录")
    public Result deleteTradeRecord(@PathVariable Long id, HttpServletRequest request) {
        log.info("删除交易记录：{}", id);
        Long userId = getUserIdFromToken(request);
        tradeRecordService.deleteTradeRecord(id, userId);
        return Result.success("删除交易记录成功");
    }

    /**
     * 批量删除交易记录
     *
     * @param ids
     * @param request
     * @return
     */
    @DeleteMapping
    @ApiOperation("批量删除交易记录")
    public Result batchDeleteTradeRecord(@RequestParam List<Long> ids, HttpServletRequest request) {
        log.info("批量删除交易记录：{}", ids);
        Long userId = getUserIdFromToken(request);
        tradeRecordService.batchDeleteTradeRecord(ids, userId);
        return Result.success("批量删除交易记录成功");
    }

    /**
     * 从token中获取用户id
     *
     * @param request
     * @return
     */
    private Long getUserIdFromToken(HttpServletRequest request) {
        String token = request.getHeader("Authorization");
        if (token != null) {
            Claims claims = JwtUtil.parseJWT(jwtProperties.getUserSecretKey(), token);
            return Long.valueOf(claims.get(JwtClaimsConstant.USER_ID).toString());
        }
        throw new RuntimeException("无效token");
    }
}
