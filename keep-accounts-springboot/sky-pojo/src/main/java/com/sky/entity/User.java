package com.sky.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class User implements Serializable {

    private static final long serialVersionUID = 1L;

    // 主键
    private Long id;

    // 微信用户唯一标识
    private String openId;

    // 用户名
    private String username;

    // 性别 0 女 1 男
    private String sex;

    // 头像
    private String avatar;

    // 手机号
    private String phoneNumber;

    // 注册时间
    private LocalDateTime createTime;
}
