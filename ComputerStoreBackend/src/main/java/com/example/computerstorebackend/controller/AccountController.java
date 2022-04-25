package com.example.computerstorebackend.controller;

import com.example.computerstorebackend.dto.AccountDTO;
import com.example.computerstorebackend.exception.ResourceNotFoundException;
import com.example.computerstorebackend.mapper.AccountMapper;
import com.example.computerstorebackend.model.Account;
import com.example.computerstorebackend.model.AccountData;
import com.example.computerstorebackend.model.Cart;
import com.example.computerstorebackend.model.Role;
import com.example.computerstorebackend.service.account.AccountService;
import com.example.computerstorebackend.service.cart.CartService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class AccountController {

    private AccountMapper accountMapper;
    private AccountService accountService;
    private CartService cartService;


    @GetMapping("/account/users")
    public List<Account> getUserAccounts() {
        return accountService.findByRole(Role.USER);
    }

    @GetMapping("/account/admins")
    public List<Account> getAdminAccounts() {
        return accountService.findByRole(Role.ADMIN);
    }

    @GetMapping("/account")
    public List<Account> getAllAccounts() {
        return accountService.findAll();
    }


    @PostMapping("/signIn")
    public ResponseEntity<Account> signIn(@RequestBody Map<String, String> str) {
        String username = str.get("username");
        String password = str.get("password");
        Optional<Account> acc = accountService.findByUsernameAndPassword(username, password);
        if (acc.isPresent()) {
            return ResponseEntity.ok(acc.orElseThrow(() -> new ResourceNotFoundException("User not found with username :" + username)));
        }
        return null;
    }

    @PostMapping("/signUp")
    public ResponseEntity<Account> signUp(@RequestBody Account account) {
        Optional<Account> byUsername = accountService.findByUsername(account.getUsername());
        if (byUsername.isEmpty()) {
//            user.setPassword(passwordEncoder.encode(user.getPassword()));
            account.setRole(Role.USER);
            Account acc = accountService.save(account);
            Cart cart = Cart.builder().account(acc).build();
            cartService.save(cart);
            return ResponseEntity.ok(acc);
        }
        return null;
    }

    @PutMapping("/account/{id}")
    public ResponseEntity<Account> editUser(@PathVariable Long id, @RequestBody Account account) {
        Optional<Account> a = accountService.findById(id);
        Account acc = null;
        if (a.isPresent()) {
            acc = a.get();
            acc.setPassword(account.getPassword());
            AccountData data = acc.getAccountData();
            data.setFirstname(account.getAccountData().getFirstname());
            data.setLastname(account.getAccountData().getLastname());
            data.setPhone(account.getAccountData().getPhone());
            data.setEmail(account.getAccountData().getEmail());
            acc.setAccountData(data);
        }
        return ResponseEntity.ok(accountService.update(acc));
    }


    @GetMapping("/account/{id}")
    public ResponseEntity<AccountDTO> getUserById(@PathVariable Long id) {
        Optional<Account> account = accountService.findById(id);
        return ResponseEntity.ok(accountMapper.toDto(account.orElseThrow(() -> new ResourceNotFoundException("User not found with id :" + id))));
    }

    @DeleteMapping("/account/{id}")
    public ResponseEntity<Map<String, Boolean>> del(@PathVariable Long id) {
        Optional<Account> account = accountService.findById(id);
        account.ifPresent(value -> accountService.delete(value));
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", true);
        return ResponseEntity.ok(response);
    }


}
