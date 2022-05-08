package com.example.computerstorebackend.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
@Builder
@Embeddable
public class AccountData {

    @Column
    private String firstname;

    @Column
    private String lastname;

    @Column
    private String phone;




//    @JoinColumn(name = "account_id")
//    @OneToMany(fetch = FetchType.LAZY)
//    private List<Address> address;

}
