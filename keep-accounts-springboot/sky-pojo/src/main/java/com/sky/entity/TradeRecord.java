package com.sky.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.math.BigDecimal;
import java.time.LocalDateTime;

/**
 * Author: Cassie
 * Date: 2024/12/23 11:06
 * Description: 交易记录实体类
 */

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class TradeRecord implements Serializable {
    private static final long serialVersionUID = 1L;

    // 主键Id
    private Long id;

    // 用户Id
    private Long userId;

    // 收入/支出 分类
    private String category;

    // 收入/支出 金额
    private BigDecimal money;

    // 备注
    private String memorandum;

    // 交易途径：1微信 2支付宝 3银行卡
    private Integer route;

    // 收入/支出 0收入 1支出
    private Integer type;

    // 创建时间
    private LocalDateTime createTime;

    // 更新时间
    private LocalDateTime updateTime;

    // 创建人
    private Long createUser;

    // 修改人
    private Long updateUser;
}
