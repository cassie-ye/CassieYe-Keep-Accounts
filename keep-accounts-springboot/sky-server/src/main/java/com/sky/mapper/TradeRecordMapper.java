package com.sky.mapper;

import com.sky.annotation.AutoFill;
import com.sky.entity.TradeRecord;
import com.sky.enumeration.OperationType;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;

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
    @Insert("insert into trade_record (category,money,memorandum,route,type,create_time,update_time,create_user,update_user)" +
            "values" +
            "(#{category},#{money},#{memorandum},#{route},#{type},#{createTime},#{updateTime},#{createUser},#{updateUser})"
    )
    @AutoFill(value = OperationType.INSERT)
    void insert(TradeRecord tradeRecord);
}
