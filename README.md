# nest-backend
para rodar o front end use:
```bash
cd client
yarn install
yarn dev
```

Para rodar o back end use, em dois bash separados:
```bash
cd server
sudo docker compose up
```
obs: sem sudo caso nao esteja usando linux

agora crie um arquivo .env em /server com o seguinte conteudo:

```bash
DATABASE_URL="mysql://root:developer123@localhost:3306/signoTech"
JWT_SECRET_CONSTANT="E3B0C44298FC1C149AFBF4C8996FB92427AE41E4649B934CA495991B7852B855"
```
por fim rode os comandos 
```bash
cd server
npm install
npx prisma generate
npx prisma migrate dev
yarn start:dev
```
