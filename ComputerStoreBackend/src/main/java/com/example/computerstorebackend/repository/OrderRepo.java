package com.example.computerstorebackend.repository;

import com.example.computerstorebackend.model.Order;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OrderRepo extends GenericRepository<Order>{

    List<Order> findByCart_Id(Long id);

    List<Order> findByCart_Account_Id(Long id);
}
