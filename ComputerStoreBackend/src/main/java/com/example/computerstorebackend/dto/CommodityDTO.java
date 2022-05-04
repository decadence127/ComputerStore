package com.example.computerstorebackend.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.Column;
import java.io.Serializable;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@ToString
@Builder
public class CommodityDTO implements Serializable {

    private Long id;

    private String name;

    private double price;

    private int quantity;

    private String description;

    private String imageUrl;
}
