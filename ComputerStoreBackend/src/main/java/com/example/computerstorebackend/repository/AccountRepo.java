package com.example.computerstorebackend.repository;

import com.example.computerstorebackend.model.Account;
import com.example.computerstorebackend.model.Role;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface AccountRepo extends GenericRepository<Account> {

    List<Account> findByRole(Role role);

    Optional<Account> findByUsername(String username);

    Optional<Account> findByUsernameAndPassword(String username, String password);

    List<Account> findByAccountData_Firstname(String firstName);

    List<Account> findByAccountData_Lastname(String lastName);

    Optional<Account> findByEmail(String email);

    Optional<Account> findByAccountData_Phone(String phone);

}
