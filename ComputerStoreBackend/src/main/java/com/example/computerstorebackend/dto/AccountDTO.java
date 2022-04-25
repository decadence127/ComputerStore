package com.example.computerstorebackend.dto;

import com.example.computerstorebackend.model.AccountData;
import com.example.computerstorebackend.model.Role;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import java.io.Serializable;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@ToString
@Builder
public class AccountDTO implements Serializable {

    private Long id;

    private String username;

    private String password;

    private Role role;

    private AccountDataDTO accountData;
}
