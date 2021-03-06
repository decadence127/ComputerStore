package com.example.computerstorebackend.service.order;

import com.example.computerstorebackend.model.Order;
import com.example.computerstorebackend.repository.OrderRepo;
import com.example.computerstorebackend.service.GenericServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderServiceImpl extends GenericServiceImpl<Order, OrderRepo> implements OrderService{

    @Autowired
    public OrderServiceImpl(OrderRepo repo) {
        super(repo);
    }

    @Override
    public List<Order> findByAccount_Id(Long id) {
        return repo.findByAccount_Id(id);
    }

}
