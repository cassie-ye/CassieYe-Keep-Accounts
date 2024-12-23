package com.sky.controller.admin;

import com.sky.dto.CategoryDTO;
import com.sky.dto.CategoryPageQueryDTO;
import com.sky.entity.Category;
import com.sky.result.PageResult;
import com.sky.result.Result;
import com.sky.service.CategoryService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

/**
 * Author: Cassie
 * Date: 2024/12/8 13:44
 * Description: 分类管理
 */
@RestController
@RequestMapping("/admin/category")
@Slf4j
@Api(tags = "分类相关接口")
public class CategoryController {
    @Autowired
    private CategoryService categoryService;

    /**
     * 新增分类
     *
     * @param categoryDTO
     * @return
     */
    @PostMapping
    @ApiOperation("新增分类")
    public Result add(@RequestBody CategoryDTO categoryDTO) {
        log.info("新增分类：{}", categoryDTO);
        categoryService.add(categoryDTO);
        return Result.success("新增分类成功");
    }

    /**
     * 分页查询分类
     *
     * @param categoryPageQueryDTO
     * @return
     */
    @GetMapping("/page")
    @ApiOperation("分页查询分类")
    public Result<PageResult> paginationQuery(CategoryPageQueryDTO categoryPageQueryDTO) {
        log.info("分页查询分类：{}", categoryPageQueryDTO);
        PageResult pageResult = categoryService.paginationQuery(categoryPageQueryDTO);
        return Result.success(pageResult);
    }


    /**
     * 启用禁用分类
     *
     * @param status
     * @param id
     * @return
     */
    @PostMapping("/status/{status}")
    @ApiOperation("启用禁用分类")
    public Result startOrStopCategory(@PathVariable Integer status, Long id) {
        log.info("启用禁用分类：{},{}", status, id);
        categoryService.startOrStop(status, id);
        String msg = status == 1 ? "启用" : "禁用";
        return Result.success(msg + "分类成功");
    }

    /**
     * 根据Id删除分类
     *
     * @param id
     * @return
     */
    @DeleteMapping
    @ApiOperation("根据Id删除分类")
    public Result deleteCategoryById(Long id) {
        log.info("根据Id删除分类：{}", id);
        categoryService.deleteCategoryById(id);
        return Result.success("删除成功");
    }

    /**
     * 根据类型查询分类
     *
     * @param type
     * @return
     */
    @GetMapping("/list")
    @ApiOperation("根据类型查询分类")
    public Result<List<Category>> getCategoryListByType(Integer type) {
        log.info("根据类型查询分类：{}", type); // 1 菜品分类  2 套餐分类
        List<Category> categoryList = categoryService.getCategoryListByType(type);
        return Result.success(categoryList);
    }

    /**
     * 修改分类
     *
     * @param categoryDTO
     * @return
     */
    @PutMapping
    @ApiOperation("修改分类")
    public Result updateCategory(@RequestBody CategoryDTO categoryDTO) {
        log.info("修改分类：{}", categoryDTO);
        categoryService.update(categoryDTO);
        return Result.success("修改分类成功");
    }
}
