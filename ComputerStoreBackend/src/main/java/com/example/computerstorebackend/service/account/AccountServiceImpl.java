package com.example.computerstorebackend.service.account;

import com.example.computerstorebackend.model.Account;
import com.example.computerstorebackend.model.Role;
import com.example.computerstorebackend.repository.AccountRepo;
import com.example.computerstorebackend.service.GenericServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AccountServiceImpl extends GenericServiceImpl<Account, AccountRepo> implements AccountService {

    @Autowired
    public AccountServiceImpl(AccountRepo repo) {
        super(repo);
    }

    @Override
    public List<Account> findByRole(Role role) {
        return repo.findByRole(role);
    }

    @Override
    public Optional<Account> findByUsername(String username) {
        return repo.findByUsername(username);
    }

    @Override
    public Optional<Account> findByUsernameAndPassword(String username, String password) {
        return repo.findByUsernameAndPassword(username, password);
    }

    @Override
    public List<Account> findByAccountData_Firstname(String firstName) {
        return repo.findByAccountData_Firstname(firstName);
    }

    @Override
    public Optional<Account> findByToken(String token){
        return repo.findByToken(token);
    }
    @Override
    public List<Account> findByAccountData_Lastname(String lastName) {
        return repo.findByAccountData_Lastname(lastName);
    }

    @Override
    public Optional<Account> findByEmail(String email) {
        return repo.findByEmail(email);
    }

    @Override
    public Optional<Account> findByAccountData_Phone(String phone) {
        return repo.findByAccountData_Phone(phone);
    }

}
