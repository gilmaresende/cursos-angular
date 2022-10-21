import { inject } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { CalculadoraService } from './calculadora.service';

describe('CalculadoraService', () => {
  let service: CalculadoraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculadoraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('deve granatir ONDE 10 - 2 = 8', () => {
    const res = service.calcular(10, 2, CalculadoraService.SUBTRACAO);
    expect(res).toEqual(8);
  });

  it('deve granatir ONDE 1 + 4 = 5', () => {
    const res = service.calcular(1, 4, CalculadoraService.SOMA);
    expect(res).toEqual(5);
  });


  it('deve granatir ONDE 3 * 7 = 14', () => {
    const res = service.calcular(3, 7, CalculadoraService.MULTIPLICACAO);
    expect(res).toEqual(21);
  });


  it('deve granatir ONDE 90 * 10 = 9', () => {
    const res = service.calcular(90, 10, CalculadoraService.DIVISAO);
    expect(res).toEqual(9);
  });

})
