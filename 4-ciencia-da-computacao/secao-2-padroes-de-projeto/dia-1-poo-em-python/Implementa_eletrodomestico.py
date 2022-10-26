from Eletrodomestico import Eletrodomestico


class Microondas(Eletrodomestico):
    def __init__(self, cor, potencia, voltagem, preco):
        # chamando o método da classe mãe
        super().__init__(cor, potencia, voltagem, preco)


class Batedeira(Eletrodomestico):
    def __init__(self, cor, potencia, voltagem, preco):
        super().__init__(cor, potencia, voltagem, preco)


class Fogao(Eletrodomestico):
    def __init__(self, cor, potencia, voltagem, preco, numero_de_bocas=4):
        super().__init__(cor, potencia, voltagem, preco)
        # sobrescrita do método da classe mãe
        self.__numero_de_bocas = numero_de_bocas


microwave = Microondas("cinza", "1000", "220", "500")
mixer = Batedeira("vermelha", "2000", "127", "700")
stove = Fogao("preto", "500", "220", "1200")


print(f"O microondas {microwave.cor} custa {microwave.preco}.")
print(f"A batedeira {mixer.cor} custa {mixer.preco}.")
print(f"O fogão {stove.cor} custa {stove.preco}.")

"""
Saída:

O microondas cinza custa 500.
A batedeira vermelha custa 700.
O fogão preto custa 1200.

"""
