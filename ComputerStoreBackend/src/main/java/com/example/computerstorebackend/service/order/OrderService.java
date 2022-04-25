package com.example.computerstorebackend.service.order;

import com.example.computerstorebackend.model.Order;
import com.example.computerstorebackend.service.GenericService;

import java.util.List;

public interface OrderService extends GenericService<Order> {

    List<Order> findByAccount_Id(Long id);
}
