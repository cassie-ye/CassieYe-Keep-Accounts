package com.sky.mapper;

import com.sky.entity.User;
import com.sky.vo.UserLoginVO;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

/**
 * Author: Cassie
 * Date: 2024/12/28 21:16
 * Description:
 */

@Mapper
public interface UserMapper {

    /**
     * 根据openid查询用户
     *
     * @param openid
     * @return
     */
    @Select("select * from user where openid = #{openid}")
    User getUserByOpenid(String openid);

    /**
     * 新增用户
     *
     * @param user
     */
    void insert(User user);
}
