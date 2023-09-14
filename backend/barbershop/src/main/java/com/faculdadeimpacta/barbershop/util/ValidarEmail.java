package com.faculdadeimpacta.barbershop.util;

import org.springframework.stereotype.Service;

import java.util.function.Predicate;


@Service
public class ValidarEmail implements Predicate<String> {

  @Override
  public boolean test(String s){
    return true;
  }
}
