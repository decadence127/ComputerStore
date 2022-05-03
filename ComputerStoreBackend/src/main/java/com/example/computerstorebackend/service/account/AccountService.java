package com.example.computerstorebackend.service.account;

import com.example.computerstorebackend.model.Account;
import com.example.computerstorebackend.model.Role;
import com.example.computerstorebackend.service.GenericService;

import java.util.List;
import java.util.Optional;

public interface AccountService extends GenericService<Account> {

    List<Account> findByRole(Role role);

    Optional<Account> findByUsername(String username);
    Optional<Account> findByEmail(String email);
    Optional<Account> findByUsernameAndPassword(String username, String password);

    List<Account> findByAccountData_Firstname(String firstName);

    List<Account> findByAccountData_Lastname(String lastName);


    Optional<Account> findByAccountData_Phone(String phone);
}
