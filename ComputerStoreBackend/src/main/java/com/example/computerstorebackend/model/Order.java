package com.example.computerstorebackend.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@ToString
@Entity
@Table(name = "\"order\"")
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    @Enumerated(EnumType.STRING)
    private Condition condition;

    @ManyToMany
    @JoinTable(
            name = "order_commodities",
            joinColumns = @JoinColumn(name = "order_id"),
            inverseJoinColumns = @JoinColumn(name = "commodity_id")
    )
    private List<Commodity> commodities = new ArrayList<>();

    @Column
    @Enumerated(EnumType.STRING)
    private Delivery delivery;

    @Column
    @Enumerated(EnumType.STRING)
    private Payment payment;

    @JoinColumn(name = "address_id")
    @OneToOne(fetch = FetchType.LAZY, cascade = {CascadeType.ALL})
    private Address address;

    @JoinColumn(name = "account_id")
    @ManyToOne(fetch = FetchType.LAZY)
    private Account account;

    @Column
    private LocalDate orderDate;

    @Column
    private LocalDate deliveryDate;
}
