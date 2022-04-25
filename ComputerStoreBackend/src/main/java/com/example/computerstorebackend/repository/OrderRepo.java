package com.example.computerstorebackend.repository;

import com.example.computerstorebackend.model.Order;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OrderRepo extends GenericRepository<Order>{

    List<Order> findByAccount_Id(Long id);

}
