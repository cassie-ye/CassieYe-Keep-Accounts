package com.sky.dto;

import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

import javax.validation.constraints.NotNull;
import java.io.Serializable;
import java.math.BigDecimal;

/**
 * Author: Cassie
 * Date: 2024/12/23 14:03
 * Description: 新增/修改交易记录DTO
 */
@Data
public class TradeRecordDTO implements Serializable {

    @NotNull
    @ApiModelProperty("主键")
    private Long id;

    @ApiModelProperty("收入/支出 分类")
    private String category;

    @ApiModelProperty("收入/支出 金额")
    private BigDecimal money;

    @ApiModelProperty("备注")
    private String memorandum;

    @ApiModelProperty("交易途径：1微信 2支付宝 3银行卡")
    private Integer route;

    @ApiModelProperty("交易类型：1收入 2支出")
    private Integer type;
}
