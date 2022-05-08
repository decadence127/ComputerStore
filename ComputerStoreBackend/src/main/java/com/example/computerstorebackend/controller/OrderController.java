package com.example.computerstorebackend.controller;

import com.example.computerstorebackend.dto.CommodityDTO;
import com.example.computerstorebackend.dto.OrderDTO;
import com.example.computerstorebackend.exception.ResourceNotFoundException;
import com.example.computerstorebackend.mapper.CommodityMapper;
import com.example.computerstorebackend.mapper.OrderMapper;
import com.example.computerstorebackend.model.Cart;
import com.example.computerstorebackend.model.Commodity;
import com.example.computerstorebackend.model.Condition;
import com.example.computerstorebackend.model.Order;
import com.example.computerstorebackend.service.cart.CartService;
import com.example.computerstorebackend.service.commodity.CommodityService;
import com.example.computerstorebackend.service.order.OrderService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
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
@RequestMapping("/ComputerStore")
public class OrderController {

    private OrderMapper orderMapper;
    private OrderService orderService;
    private CartService cartService;
    private CommodityService commodityService;

    @Autowired
    public OrderController(OrderMapper orderMapper, OrderService orderService, CartService cartService, CommodityService commodityService) {
        this.orderMapper = orderMapper;
        this.orderService = orderService;
        this.cartService = cartService;
        this.commodityService = commodityService;
    }

    @GetMapping("/order")
    public List<OrderDTO> getOrders() {
        return orderMapper.toListDto(orderService.findAll());
    }

    @GetMapping("/order/user/{id}")
    public List<OrderDTO> getOrdersByAccId(@PathVariable Long id) {
        return orderMapper.toListDto(orderService.findByAccount_Id(id));
    }

    @PostMapping("/order")
    public ResponseEntity createOrder(@RequestBody Order order) {
        Cart cart = cartService.findByAccount_Id(
                order.getAccount().getId()).orElseThrow(
                () -> new ResourceNotFoundException("Cart not found with id :" +
                        order.getAccount().getId()));
        for (Commodity commodity : order.getCommodities()) {
            commodity = commodityService.findById(commodity.getId()).orElseThrow(
                    () -> new ResourceNotFoundException("Commodity not found" ));
            cart.getCommodities().remove(commodity);
            int quantity = commodity.getQuantity();
            commodity.setQuantity(--quantity);
        }
        cartService.update(cart);
        order.setCondition(Condition.PROCESSING);
        order.setOrderDate(LocalDate.now());
        return ResponseEntity.ok(orderService.save(order));
    }


    @PutMapping("/order/{id}")
    public ResponseEntity editCommodity(@PathVariable Long id, @RequestBody Order order) {
        Optional<Order> o = orderService.findById(id);
        Order ord = o.orElseThrow(() -> new ResourceNotFoundException("Cart not found with id :" + id));
        ord.setCondition(order.getCondition());
        ord.setDeliveryDate(LocalDate.now());
        return ResponseEntity.ok(orderService.update(ord));
    }


    @GetMapping("/order/{id}")
    public ResponseEntity getCommodityById(@PathVariable Long id) {
        Optional<Order> order = orderService.findById(id);
        return ResponseEntity.ok(orderMapper.toDto(order.orElseThrow(() -> new ResourceNotFoundException("Order not found with id :" + id))));
    }

    @DeleteMapping("/order/{id}")
    public ResponseEntity del(@PathVariable Long id) {
        Optional<Order> order = orderService.findById(id);
        Order o = order.orElseThrow(() -> new ResourceNotFoundException("Commodity not found with id :" + id));
        orderService.delete(o);
        return new ResponseEntity<>("Successful operation", HttpStatus.OK);
    }
}
