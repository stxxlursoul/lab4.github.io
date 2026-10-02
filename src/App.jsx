import {
  Layout,
  Row,
  Col,
  Flex,
  Typography,
  Table,
  Form,
  Input,
  Select,
  DatePicker,
  Radio,
  Checkbox,
  Button,
  Divider,
} from 'antd';
import './App.css';
import { useState } from 'react';
import dayjs from 'dayjs';

const { Header, Content, Footer } = Layout;
const { Title, Paragraph, Link } = Typography;
const { TextArea } = Input;

const tableColumns = [
  {
    title: '№',
    dataIndex: 'num',
    key: 'num',
    onCell: (record) => record.numCell || {},
  },
  {
    title: 'Язык программирования',
    dataIndex: 'lang',
    key: 'lang',
    onCell: (record) => record.langCell || {},
  },
  {
    title: 'Уровень абстракции',
    dataIndex: 'level',
    key: 'level',
    onCell: (record) => record.levelCell || {},
  },
  {
    title: 'Реализация',
    dataIndex: 'impl',
    key: 'impl',
    onCell: (record) => record.implCell || {},
  },
];

const tableData = [
  {
    key: '1',
    num: 1,
    lang: 'Python',
    level: 'Высокоуровневый',
    impl: 'Интерпретируемый',
    implCell: { rowSpan: 2 },
  },
  {
    key: '2',
    num: 2,
    lang: 'JavaScript',
    level: 'Высокоуровневый',
    impl: '',
    implCell: { rowSpan: 0 },
  },
  {
    key: '3',
    num: 3,
    lang: 'Java',
    level: 'Высокоуровневый, компилируемо-интерпретируемый',
    impl: '',
    levelCell: { colSpan: 2 },
    implCell: { colSpan: 0 },
  },
  {
    key: '4',
    num: 4,
    lang: 'C++',
    level: 'Высокоуровневый',
    impl: 'Компилируемый',
  },
  {
    key: '5',
    num: 5,
    lang: 'C#',
    level: 'Высокоуровневый',
    impl: 'Компилируемый',
  },
  {
    key: '6',
    num: 6,
    lang: 'Go',
    level: 'Высокоуровневый',
    impl: 'Компилируемый',
  },
];

const languageOptions = [
  'Pascal', 'C', 'C++', 'JavaScript', 'PHP', 'Python',
  'Java', 'Haskell', 'Clojure', 'Prolog', 'Scala',
].map((l) => ({ label: l, value: l }));

export default function App() {
  const [submitted, setSubmitted] = useState(null);

  const onFinish = (values) => {
    setSubmitted(values);
  };

  return (
    <Layout style={{ minHeight: '100vh', background: '#fff' }}>
      <Header className="site-header">
        <div className="header-container">
          <Row align="middle" justify="space-between" gutter={[8, 8]}>
            <Col xs={24} md={12}>
              <Flex align="center" gap={15} className="brand-flex">
                <img src={`${import.meta.env.BASE_URL}logo.png`} alt="Логотип" className="logo-img" />
                <span className="site-title">Языки программирования</span>
              </Flex>
            </Col>

            <Col xs={24} md={12}>
              <nav>
                <Flex className="nav-flex">
                  <Link href="#lab1" className="nav-link">Главная</Link>
                  <Link href="#table-section" className="nav-link">Таблица</Link>
                  <Link href="#footer" className="nav-link">Контакты</Link>
                </Flex>
              </nav>
            </Col>
          </Row>
        </div>
      </Header>

      <Content>
        <div className="main-content">
          <Title level={1} className="page-title">Лабораторная работа 4</Title>
          <div id="lab1" />

          <div className="content-wrapper">
            <section className="links-section">
              <Title level={2}>Маркированный список с гиперссылками:</Title>
              <ul className="links-list">
                <li><Link href="http://kubsu.ru/">КубГУ</Link></li>
                <li><Link href="https://kubsu.ru/">КубГУ через https</Link></li>
                <li>
                  <a href="https://www.java.com/ru/">
                    <img src={`${import.meta.env.BASE_URL}image.png`} alt="java" className="flower-img" />
                  </a>
                </li>
                <li><Link href="inside_page.html">Сокращенная ссылка на внутреннюю страницу</Link></li>
                <li><Link href="index.html">Сокращенная ссылка на главную</Link></li>
                <li><Link href="#lab1">Ссылка на фрагмент страницы</Link></li>
                <li><Link href="index.html/page?param1=a&param2=b&param3=c">Ссылка с тремя параметрами в URL</Link></li>
                <li><Link href="index.html/page?id=123">Ссылка с параметром id в URL</Link></li>
                <li><Link href="./page.html">Относительная ссылка в текущем каталоге</Link></li>
                <li><Link href="about/page.html">Относительная ссылка в каталоге about</Link></li>
                <li><Link href="../page.html">Относительная ссылка уровнем выше</Link></li>
                <li><Link href="../../page.html">Относительная ссылка двумя уровнями выше</Link></li>
                <li>
                  <Paragraph>
                    HTML — это стандартизированный язык разметки документов, который
                    используется для создания структуры и содержимого веб-страниц в браузере,
                    ссылка: <Link href="https://ru.wikipedia.org/wiki/HTML">HTML</Link>
                  </Paragraph>
                </li>
                <li>
                  <Link href="https://ru.wikipedia.org/wiki/HTML#Структура_HTML-документа">
                    Структура HTML-документа (ссылка на фрагмент стороннего сайта)
                  </Link>
                </li>
                <li>
                  <img
                    src={`${import.meta.env.BASE_URL}krugkvad.png`}
                    useMap="#map"
                    alt="Картинка с областями"
                    className="map-image"
                  />
                  <map name="map">
                    <area
                      shape="rect"
                      coords="52,55,351,355"
                      href="https://maximumtest.ru/uchebnik/8-klass/matematika/kvadrat"
                      alt="Переход по прямоугольнику"
                    />
                    <area
                      shape="circle"
                      coords="600,200,200"
                      href="https://el-ed.ru/blog/krug-i-ego-elementy/"
                      alt="Переход по кругу"
                    />
                  </map>
                </li>
                <li><a href="">Ссылка с пустым href</a></li>
                <li><a>Ссылка без href</a></li>
                <li><Link href="http://kubsu.ru/" rel="nofollow">Ссылка, по которой запрещен переход поисковикам</Link></li>
                <li><Link href="https://example.com" rel="noindex">Ссылка, запрещенная для индексации</Link></li>
                <li>
                  <ol>
                    <li><Link href="./page.html" title="Перейти на страницу 1">Первая страница</Link></li>
                    <li><Link href="about/page.html" title="Перейти на страницу 2">Вторая страница</Link></li>
                  </ol>
                </li>
                <li><Link href="ftp://user:password@ftp.example.com/file.zip">Ссылка на FTP-файл с авторизацией</Link></li>
              </ul>
            </section>

            <section className="table-section" id="table-section">
              <Title level={2}>Таблица данных</Title>
              <Table
                columns={tableColumns}
                dataSource={tableData}
                pagination={false}
                bordered
                rowClassName={(_, index) => (index % 2 === 0 ? 'row-odd' : 'row-even')}
              />
            </section>
          </div>

          <Divider />

          <Title level={2}>Форма</Title>
          <Form
            layout="vertical"
            onFinish={onFinish}
            initialValues={{ gender: 'male', contract: true, telephone: '+7' }}
            style={{ maxWidth: 600 }}
          >
            <Form.Item
              name="fullname"
              label="ФИО"
              rules={[
                { required: true, message: 'Введите ФИО' },
                { pattern: /^[A-Za-zА-Яа-яЁё\s-]+$/, message: 'Только буквы, пробелы и дефис' },
              ]}
            >
              <Input placeholder="Фамилия Имя Отчество" />
            </Form.Item>

            <Form.Item
              name="telephone"
              label="Номер телефона"
              rules={[
                { required: true, message: 'Введите телефон' },
                { pattern: /^[0-9+]{10,}$/, message: 'Минимум 10 символов (цифры и +)' },
              ]}
            >
              <Input placeholder="+7" />
            </Form.Item>

            <Form.Item
              name="email"
              label="Электронная почта"
              rules={[
                { required: true, message: 'Введите почту' },
                { type: 'email', message: 'Некорректный email' },
              ]}
            >
              <Input placeholder="Введите вашу почту" />
            </Form.Item>

            <Form.Item
              name="birthdate"
              label="Дата рождения"
              rules={[{ required: true, message: 'Выберите дату' }]}
            >
              <DatePicker
                style={{ width: '100%' }}
                disabledDate={(current) => current && current > dayjs().endOf('day')}
              />
            </Form.Item>

            <Form.Item name="gender" label="Пол" rules={[{ required: true }]}>
              <Radio.Group>
                <Radio value="male">Мужской</Radio>
                <Radio value="female">Женский</Radio>
              </Radio.Group>
            </Form.Item>

            <Form.Item
              name="languages"
              label="Любимый язык программирования"
              rules={[{ required: true, message: 'Выберите хотя бы один' }]}
            >
              <Select
                mode="multiple"
                placeholder="Выберите языки"
                options={languageOptions}
                style={{ width: '100%' }}
              />
            </Form.Item>

            <Form.Item
              name="bio"
              label="Биография"
              rules={[{ required: true, message: 'Заполните биографию' }]}
            >
              <TextArea rows={4} />
            </Form.Item>

            <Form.Item
              name="contract"
              valuePropName="checked"
              rules={[
                {
                  validator: (_, value) =>
                    value
                      ? Promise.resolve()
                      : Promise.reject(new Error('Подтвердите ознакомление')),
                },
              ]}
            >
              <Checkbox>С контрактом ознакомлен</Checkbox>
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">Сохранить</Button>
            </Form.Item>
          </Form>

          {submitted && (
            <div className="success-message">
              <strong>Данные отправлены</strong>
            </div>
          )}
        </div>
      </Content>

      <Footer className="site-footer" id="footer">
        (с) Картопольцев Роман, 2026
      </Footer>
    </Layout>
  );
}