""" Para fixar crie uma classe do objeto geladeira,
    e semelhante ao exemplo do liquidificador """


class Geladeira:
    def __init__(self, cor, potencia, voltagem, preco):
        self.preco = preco
        self.__cor = cor
        self.__potencia = potencia
        self.__voltagem = voltagem
        self.__ligado = False

    @property
    def cor(self):
        return self.__cor

    @cor.setter
    def cor(self, nova_cor):
        self.__cor = nova_cor


geladeira = Geladeira("Vermelha", 1000, 220, 3000)

print(f"A cor atual é {geladeira.cor}")
geladeira.cor = "Azul"
print(f"Após pintarmos, a nova cor é {geladeira.cor}")


class Pessoa:
    def __init__(self, nome, saldo_na_conta):
        self.nome = nome
        self.saldo_na_conta = saldo_na_conta
        self.geladeira = None

    def comprar_geladeira(self, geladeira: Geladeira):
        if geladeira.preco <= self.saldo_na_conta:
            self.saldo_na_conta -= geladeira.preco
            self.geladeira = geladeira

    def __str__(self):
        if self.geladeira is None:
            return f"{self.nome} não tem uma geladeira"
        return f"""
        {self.nome}:
        - comprou uma geladeira de {self.geladeira.preco} reais
        - agora possui {self.saldo_na_conta} reais em sua conta.
        """


pessoa_compradora = Pessoa("Danilo", 8000)
pessoa_compradora.comprar_geladeira(geladeira)

pessoa_sem_geladeira = Pessoa("Tiemi", 3000)

print(pessoa_compradora)
print(pessoa_sem_geladeira)


"""
Saída:
A cor atual é Vermelha
Após pintarmos, a nova cor é Azul

        Danilo:
        - comprou uma geladeira de 3000 reais
        - agora possui 5000 reais em sua conta.

Tiemi não tem uma geladeira

"""
