package com.sky.mapper;

import com.sky.entity.DishFlavor;
import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;

/**
 * Author: Cassie
 * Date: 2024/12/18 11:11
 * Description:
 */

@Mapper
public interface DishFlavorMapper {

    /**
     * 批量插入口味数据
     *
     * @param flavors
     */
    void insertBatch(List<DishFlavor> flavors);

    /**
     * 根据菜品id删除口味数据
     *
     * @param dishId
     */
    @Delete("delete from dish_flavor where dish_id = #{dishId}")
    void deleteDishFlavorById(Long dishId);

    /**
     * 根据菜品id批量删除口味数据
     *
     * @param dishIds
     */
    void deleteDishFlavorsByIds(List<Long> dishIds);


    /**
     * 根据菜品id查询口味数据
     *
     * @param id
     * @return
     */
    @Select("select * from dish_flavor where dish_id = #{id}")
    List<DishFlavor> getDishFlavorsByDishId(Long id);

}
