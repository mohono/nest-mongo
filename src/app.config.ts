const AppConfig = () => ({
  port: +process.env.PORT,
  dbUrl: process.env.DB_URL,
});

export default AppConfig;
