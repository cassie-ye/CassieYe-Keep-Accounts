package com.sky.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

/**
 * Author: Cassie
 * Date: 2024/12/14 10:29
 * Description:
 */

@Mapper
public interface SetmealMapper {

    /**
     * 根据分类id查询套餐数量
     * count(id)：计算满足条件的记录数
     * @param id
     * @return
     */
    @Select("select count(id) from dish where category_id = #{categoryId}")
    Integer countMealNumberById(Long id);
}
