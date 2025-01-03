package com.sky.mapper;

import com.sky.annotation.AutoFill;
import com.sky.entity.TradeRecord;
import com.sky.enumeration.OperationType;
import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;

/**
 * Author: Cassie
 * Date: 2024/12/23 14:34
 * Description:
 */

@Mapper
public interface TradeRecordMapper {

    /**
     * 插入交易记录
     *
     * @param tradeRecord
     */
    @Insert("insert into trade_record (user_id,category,money,memorandum,route,type,create_time,update_time,create_user,update_user)" +
            "values" +
            "(#{userId},#{category},#{money},#{memorandum},#{route},#{type},#{createTime},#{updateTime},#{createUser},#{updateUser})"
    )
    void insert(TradeRecord tradeRecord);

    /**
     * 删除交易记录
     *
     * @param id
     */
    @Delete("delete from trade_record where id = #{id}")
    void delete(Long id);

    /**
     * 批量删除交易记录
     *
     * @param ids
     */
    void batchDelete(List<Long> ids);

    /**
     * 根据id查询用户id
     *
     * @param id
     */
    @Select("select user_id from trade_record where id = #{id}")
    Long getUserIdById(Long id);
}
