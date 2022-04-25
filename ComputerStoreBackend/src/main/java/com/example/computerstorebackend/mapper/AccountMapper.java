package com.example.computerstorebackend.mapper;

import com.example.computerstorebackend.dto.AccountDTO;
import com.example.computerstorebackend.model.Account;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring", uses = {AccountDataMapper.class})
public interface AccountMapper {

    AccountDTO toDto(Account account);

    List<AccountDTO> toListDto(List<Account> accounts);
}
