package com.example.computerstorebackend.repository;

import com.example.computerstorebackend.model.Commodity;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CommodityRepo extends GenericRepository<Commodity> {

    List<Commodity> findByName(String name);

}
