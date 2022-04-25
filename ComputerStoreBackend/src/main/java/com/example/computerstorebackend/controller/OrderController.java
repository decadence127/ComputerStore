package com.example.computerstorebackend.controller;

import com.example.computerstorebackend.dto.CommodityDTO;
import com.example.computerstorebackend.dto.OrderDTO;
import com.example.computerstorebackend.exception.ResourceNotFoundException;
import com.example.computerstorebackend.mapper.CommodityMapper;
import com.example.computerstorebackend.mapper.OrderMapper;
import com.example.computerstorebackend.model.Commodity;
import com.example.computerstorebackend.model.Condition;
import com.example.computerstorebackend.model.Order;
import com.example.computerstorebackend.service.commodity.CommodityService;
import com.example.computerstorebackend.service.order.OrderService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDate;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class OrderController {

    private OrderMapper orderMapper;
    private OrderService orderService;

    @GetMapping("/order")
    public List<Order> getCommodities() {
        return orderService.findAll();
    }

    @PostMapping("/order")
    public Order createCommodity(@RequestBody Order order) {
        order.setCondition(Condition.PROCESSING);
        order.setOrderDate(LocalDate.now());
        return orderService.save(order);
    }


    @PutMapping("/order/{id}")
    public ResponseEntity<Order> editCommodity(@PathVariable Long id, @RequestBody Order order) {
        Optional<Order> o = orderService.findById(id);
        Order ord = null;
        if (o.isPresent()) {
            ord = o.get();
            ord.setCondition(order.getCondition());
            ord.setDeliveryDate(LocalDate.now());
        }
        return ResponseEntity.ok(orderService.update(ord));
    }


    @GetMapping("/order/{id}")
    public ResponseEntity<OrderDTO> getCommodityById(@PathVariable Long id) {
        Optional<Order> order = orderService.findById(id);
        return ResponseEntity.ok(orderMapper.toDto(order.orElseThrow(() -> new ResourceNotFoundException("Order not found with id :" + id))));
    }

    @DeleteMapping("/order/{id}")
    public ResponseEntity<Map<String, Boolean>> del(@PathVariable Long id) {
        Optional<Order> order = orderService.findById(id);
        order.ifPresent(value -> orderService.delete(value));
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", true);
        return ResponseEntity.ok(response);
    }
}
