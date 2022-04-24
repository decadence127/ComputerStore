package com.example.computerstorebackend.service.order;

import com.example.computerstorebackend.model.Order;
import com.example.computerstorebackend.service.GenericService;

import java.util.List;

public interface OrderService extends GenericService<Order> {

    List<Order> findByCart_Id(Long id);

    List<Order> findByCart_Account_Id(Long id);
}
