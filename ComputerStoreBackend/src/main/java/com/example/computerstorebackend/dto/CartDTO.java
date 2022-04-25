package com.example.computerstorebackend.dto;

import com.example.computerstorebackend.model.Account;
import com.example.computerstorebackend.model.Order;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.CascadeType;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import java.io.Serializable;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@ToString
@Builder
public class CartDTO implements Serializable {

    private Long id;

    private AccountDTO account;

    private List<OrderDTO> orders;
}
