### Exercício 1
a)  VARCHAR - define o limite de caracteres que podem ser usados.
    DATE - data.

b)  SHOW DATABASES: aparecem os bancos de dados que estão disponíveis no sistema.
    SHOW TABLES: mostrar as tabelas do banco de dados atual.

c)  Aparece a descrição da estrutura de tabelas com suas colunas e tipo de dados.

### Exercício 2
a)  
    ```
    INSERT INTO Actor (id, name, salary, birth_date, gender)
    VALUES(
    "002", 
    "Glória Pires",
    1200000,
    "1963-08-23", 
    "female"
    );
    ```
b)  Error Code: 1062. Duplicate entry '002' for key 'PRIMARY' - erro de valor duplicado pois tem a mesma id do anterior.
