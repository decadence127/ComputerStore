package com.example.computerstorebackend.dto;

import com.example.computerstorebackend.model.Address;
import com.example.computerstorebackend.model.Cart;
import com.example.computerstorebackend.model.Commodity;
import com.example.computerstorebackend.model.Condition;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.Column;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import java.io.Serializable;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@ToString
@Builder
public class OrderDTO implements Serializable {

    private Long id;

    private Condition condition;

    private List<CommodityDTO> commodities = new ArrayList<>();

    private AddressDTO address;

    private CartDTO cart;

    private LocalDate orderDate;

    private LocalDate deliveryDate;
}
