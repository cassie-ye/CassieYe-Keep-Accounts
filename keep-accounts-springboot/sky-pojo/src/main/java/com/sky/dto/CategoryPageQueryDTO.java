package com.sky.dto;

import lombok.Data;

import javax.validation.constraints.NotBlank;
import java.io.Serializable;

@Data
public class CategoryPageQueryDTO implements Serializable {

    //页码
    @NotBlank
    private int page;

    //每页记录数
    @NotBlank
    private int pageSize;

    //分类名称
    private String name;

    //分类类型 1菜品分类  2套餐分类
    private Integer type;

}
