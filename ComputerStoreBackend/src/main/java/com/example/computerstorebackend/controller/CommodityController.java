package com.example.computerstorebackend.controller;

import com.example.computerstorebackend.dto.AddressDTO;
import com.example.computerstorebackend.dto.CommodityDTO;
import com.example.computerstorebackend.exception.ResourceNotFoundException;
import com.example.computerstorebackend.mapper.AddressMapper;
import com.example.computerstorebackend.mapper.CommodityMapper;
import com.example.computerstorebackend.model.Address;
import com.example.computerstorebackend.model.Commodity;
import com.example.computerstorebackend.service.address.AddressService;
import com.example.computerstorebackend.service.commodity.CommodityService;
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

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import static org.springframework.http.HttpStatus.OK;
import static org.springframework.http.HttpStatus.UNPROCESSABLE_ENTITY;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/ComputerStore")
public class CommodityController {

    private CommodityMapper commodityMapper;
    private CommodityService commodityService;

    @Autowired
    public CommodityController(CommodityMapper commodityMapper, CommodityService commodityService) {
        this.commodityMapper = commodityMapper;
        this.commodityService = commodityService;
    }

    @GetMapping("/commodity")
    public List<Commodity> getCommodities() {
        System.out.println("called");
        return commodityService.findAll();
    }

    @PostMapping("/commodity")
    public ResponseEntity createCommodity(@RequestBody Commodity commodity) {
        return ResponseEntity.ok(commodityService.save(commodity));
    }


    @PutMapping("/commodity/{id}")
    public ResponseEntity editCommodity(@PathVariable Long id, @RequestBody Commodity commodity) {
        Optional<Commodity> c = commodityService.findById(id);
        Commodity com = c.orElseThrow(() -> new ResourceNotFoundException("Commodity not found with id :" + id));
        com.setName(commodity.getName());
        com.setPrice(commodity.getPrice());
        com.setDescription(commodity.getDescription());
        com.setQuantity(commodity.getQuantity());
        return ResponseEntity.ok(commodityService.update(com));
    }




    @GetMapping("/commodity/{id}")
    public ResponseEntity getCommodityById(@PathVariable Long id) {
        Optional<Commodity> commodity = commodityService.findById(id);
        return ResponseEntity.ok(commodityMapper.toDto(commodity.orElseThrow(() -> new ResourceNotFoundException("Commodity not found with id :" + id))));
    }

    @DeleteMapping("/commodity/{id}")
    public ResponseEntity del(@PathVariable Long id) {
        Optional<Commodity> commodity = commodityService.findById(id);
        Commodity c = commodity.orElseThrow(() -> new ResourceNotFoundException("Commodity not found with id :" + id));
        commodityService.delete(c);
        HashMap<String, String> response = new HashMap<>();
        response.put("status", OK.toString());
        response.put("msg", "Device has been deleted!");
        return new ResponseEntity<>(response, HttpStatus.OK);
    }
}
