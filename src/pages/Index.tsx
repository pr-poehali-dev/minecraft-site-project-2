import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [username, setUsername] = useState('');
  const { toast } = useToast();

  const handlePurchase = (rank: string, price: number) => {
    if (!username) {
      toast({
        title: "Ошибка",
        description: "Введите ваш никнейм",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Обработка оплаты",
      description: `Привилегия ${rank} будет выдана игроку ${username} после оплаты ${price}₽`,
    });
  };

  return (
    <div className="min-h-screen bg-cover bg-center bg-fixed" style={{backgroundImage: 'url(https://cdn.poehali.dev/projects/cc8de8fd-e172-44c2-8381-061715d8c222/files/0ec9c1d5-fa7a-4c6b-8446-6039c5da237d.jpg)'}}>
      <nav className="bg-black/60 backdrop-blur-lg border-b-4 border-white/10 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-minecraft-grass pixel-corners flex items-center justify-center text-2xl">
                ⛏️
              </div>
              <h1 className="text-2xl font-black text-white text-shadow-pixel">ALFATIME</h1>
            </div>
            <div className="flex gap-2">
              <Button 
                onClick={() => setActiveTab('home')}
                variant={activeTab === 'home' ? 'default' : 'outline'}
                className="pixel-corners font-bold"
              >
                <Icon name="Home" className="mr-2 h-4 w-4" />
                Главная
              </Button>
              <Button 
                onClick={() => setActiveTab('donate')}
                variant={activeTab === 'donate' ? 'default' : 'outline'}
                className="pixel-corners font-bold"
              >
                <Icon name="Gem" className="mr-2 h-4 w-4" />
                Донат
              </Button>
              <Button 
                onClick={() => setActiveTab('forum')}
                variant={activeTab === 'forum' ? 'default' : 'outline'}
                className="pixel-corners font-bold"
              >
                <Icon name="MessageSquare" className="mr-2 h-4 w-4" />
                Форум
              </Button>
              <Button 
                onClick={() => setActiveTab('rules')}
                variant={activeTab === 'rules' ? 'default' : 'outline'}
                className="pixel-corners font-bold"
              >
                <Icon name="ScrollText" className="mr-2 h-4 w-4" />
                Правила
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8">
        {activeTab === 'home' && (
          <div className="space-y-8">
            <div 
              className="relative h-96 rounded-lg overflow-hidden pixel-corners"
              style={{
                backgroundImage: 'url(https://cdn.poehali.dev/projects/cc8de8fd-e172-44c2-8381-061715d8c222/files/42e43410-fa13-454b-b1d4-0d4d5dee5001.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="absolute inset-0 bg-black/70 backdrop-blur-sm flex flex-col items-center justify-center text-white">
                <h2 className="text-6xl font-black mb-4 text-shadow-pixel animate-float">
                  ДОБРО ПОЖАЛОВАТЬ
                </h2>
                <p className="text-2xl font-bold mb-6 text-shadow-pixel">
                  На лучший Minecraft сервер!
                </p>
                <Button size="lg" className="pixel-corners font-bold text-lg bg-minecraft-grass hover:bg-minecraft-grass/90">
                  <Icon name="Gamepad2" className="mr-2 h-5 w-5" />
                  ИГРАТЬ СЕЙЧАС
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="pixel-corners border-4 border-white/20 bg-black/40 backdrop-blur-md hover:scale-105 transition-transform text-white">
                <CardHeader>
                  <div className="w-16 h-16 bg-minecraft-grass pixel-corners mb-4 flex items-center justify-center text-3xl">
                    👥
                  </div>
                  <CardTitle className="text-2xl font-black">Онлайн игроков</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-5xl font-black text-minecraft-grass mb-2">3</div>
                  <p className="text-muted-foreground font-semibold">из 500 слотов</p>
                </CardContent>
              </Card>

              <Card className="pixel-corners border-4 border-white/20 bg-black/40 backdrop-blur-md hover:scale-105 transition-transform text-white">
                <CardHeader>
                  <div className="w-16 h-16 bg-minecraft-gold pixel-corners mb-4 flex items-center justify-center text-3xl animate-glow">
                    ⭐
                  </div>
                  <CardTitle className="text-2xl font-black">Версия</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-5xl font-black text-minecraft-gold mb-2">1.16.5</div>
                  <p className="text-muted-foreground font-semibold">Java Edition</p>
                </CardContent>
              </Card>

              <Card className="pixel-corners border-4 border-white/20 bg-black/40 backdrop-blur-md hover:scale-105 transition-transform text-white">
                <CardHeader>
                  <div className="w-16 h-16 bg-minecraft-diamond pixel-corners mb-4 flex items-center justify-center text-3xl">
                    🌍
                  </div>
                  <CardTitle className="text-2xl font-black">IP Сервера</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-black text-minecraft-diamond mb-2">play.server.ru</div>
                  <Button size="sm" variant="outline" className="pixel-corners font-bold">
                    <Icon name="Copy" className="mr-2 h-4 w-4" />
                    Скопировать
                  </Button>
                </CardContent>
              </Card>
            </div>

            <Card className="pixel-corners border-4 border-white/20 bg-black/40 backdrop-blur-md text-white">
              <CardHeader>
                <CardTitle className="text-3xl font-black">🎮 Игровой режим</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-center">
                  <div className="p-8 bg-red-900/20 pixel-corners border-2 border-red-500/50 hover:bg-red-900/30 transition-colors cursor-pointer max-w-md w-full">
                    <div className="text-6xl mb-4 text-center">⚔️</div>
                    <h3 className="font-black text-3xl mb-2 text-center text-red-500">АНАРХИЯ</h3>
                    <p className="text-center text-white/80 font-semibold mb-4">Полная свобода действий. Без правил. Выживай как сможешь.</p>
                    <div className="text-center">
                      <Badge className="pixel-corners bg-red-500 text-white text-lg px-4 py-2">3 игрока онлайн</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === 'donate' && (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-5xl font-black mb-4 text-shadow-pixel text-white">💎 ПРИВИЛЕГИИ</h2>
              <p className="text-xl font-semibold text-white/70">Автоматическая выдача после оплаты</p>
            </div>

            <div className="max-w-md mx-auto mb-8">
              <Card className="pixel-corners border-4 border-primary/30 bg-white/95">
                <CardHeader>
                  <CardTitle className="font-black">Ваш никнейм</CardTitle>
                  <CardDescription>Введите ваш игровой ник для автовыдачи</CardDescription>
                </CardHeader>
                <CardContent>
                  <Input 
                    placeholder="Steve123" 
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="pixel-corners font-semibold text-lg"
                  />
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="pixel-corners border-4 border-minecraft-emerald/50 bg-black/40 backdrop-blur-md hover:scale-105 transition-transform text-white">
                <CardHeader>
                  <div className="w-20 h-20 bg-minecraft-emerald pixel-corners mx-auto mb-4 flex items-center justify-center text-4xl animate-float">
                    🟢
                  </div>
                  <CardTitle className="text-3xl font-black text-center">VIP</CardTitle>
                  <CardDescription className="text-center font-bold text-lg">Базовые привилегии</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2 text-sm font-semibold">
                    <div className="flex items-center gap-2">
                      <Icon name="Check" className="h-5 w-5 text-minecraft-emerald" />
                      Цветной ник
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Check" className="h-5 w-5 text-minecraft-emerald" />
                      /fly команда
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Check" className="h-5 w-5 text-minecraft-emerald" />
                      5 точек дома
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Check" className="h-5 w-5 text-minecraft-emerald" />
                      Доступ к кит VIP
                    </div>
                  </div>
                  <div className="text-center pt-4">
                    <div className="text-4xl font-black text-minecraft-emerald mb-4">299₽</div>
                    <Button 
                      className="w-full pixel-corners font-bold bg-minecraft-emerald hover:bg-minecraft-emerald/90"
                      onClick={() => handlePurchase('VIP', 299)}
                    >
                      <Icon name="ShoppingCart" className="mr-2 h-4 w-4" />
                      Купить
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="pixel-corners border-4 border-minecraft-gold/50 bg-black/40 backdrop-blur-md hover:scale-105 transition-transform relative text-white">
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 pixel-corners bg-minecraft-redstone font-black">
                  ПОПУЛЯРНО
                </Badge>
                <CardHeader>
                  <div className="w-20 h-20 bg-minecraft-gold pixel-corners mx-auto mb-4 flex items-center justify-center text-4xl animate-glow">
                    🟡
                  </div>
                  <CardTitle className="text-3xl font-black text-center">PREMIUM</CardTitle>
                  <CardDescription className="text-center font-bold text-lg">Расширенные возможности</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2 text-sm font-semibold">
                    <div className="flex items-center gap-2">
                      <Icon name="Check" className="h-5 w-5 text-minecraft-gold" />
                      Всё из VIP
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Check" className="h-5 w-5 text-minecraft-gold" />
                      /god режим
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Check" className="h-5 w-5 text-minecraft-gold" />
                      15 точек дома
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Check" className="h-5 w-5 text-minecraft-gold" />
                      Приоритет входа
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Check" className="h-5 w-5 text-minecraft-gold" />
                      Доступ к кит PREMIUM
                    </div>
                  </div>
                  <div className="text-center pt-4">
                    <div className="text-4xl font-black text-minecraft-gold mb-4">599₽</div>
                    <Button 
                      className="w-full pixel-corners font-bold bg-minecraft-gold hover:bg-minecraft-gold/90"
                      onClick={() => handlePurchase('PREMIUM', 599)}
                    >
                      <Icon name="ShoppingCart" className="mr-2 h-4 w-4" />
                      Купить
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="pixel-corners border-4 border-minecraft-diamond/50 bg-black/40 backdrop-blur-md hover:scale-105 transition-transform text-white">
                <CardHeader>
                  <div className="w-20 h-20 bg-minecraft-diamond pixel-corners mx-auto mb-4 flex items-center justify-center text-4xl animate-float">
                    💎
                  </div>
                  <CardTitle className="text-3xl font-black text-center">LEGEND</CardTitle>
                  <CardDescription className="text-center font-bold text-lg">Легендарный статус</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2 text-sm font-semibold">
                    <div className="flex items-center gap-2">
                      <Icon name="Check" className="h-5 w-5 text-minecraft-diamond" />
                      Всё из PREMIUM
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Check" className="h-5 w-5 text-minecraft-diamond" />
                      Креатив режим
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Check" className="h-5 w-5 text-minecraft-diamond" />
                      Неограниченные дома
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Check" className="h-5 w-5 text-minecraft-diamond" />
                      Уникальные партиклы
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Check" className="h-5 w-5 text-minecraft-diamond" />
                      Доступ к кит LEGEND
                    </div>
                  </div>
                  <div className="text-center pt-4">
                    <div className="text-4xl font-black text-minecraft-diamond mb-4">999₽</div>
                    <Button 
                      className="w-full pixel-corners font-bold bg-minecraft-diamond hover:bg-minecraft-diamond/90"
                      onClick={() => handlePurchase('LEGEND', 999)}
                    >
                      <Icon name="ShoppingCart" className="mr-2 h-4 w-4" />
                      Купить
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="pixel-corners border-4 border-primary/30 bg-white/95 max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle className="font-black text-2xl">⚡ Как работает автовыдача?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 font-semibold">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary text-primary-foreground pixel-corners flex items-center justify-center font-black flex-shrink-0">1</div>
                  <p>Введите ваш игровой никнейм в поле выше</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary text-primary-foreground pixel-corners flex items-center justify-center font-black flex-shrink-0">2</div>
                  <p>Выберите нужную привилегию и нажмите "Купить"</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary text-primary-foreground pixel-corners flex items-center justify-center font-black flex-shrink-0">3</div>
                  <p>Оплатите любым удобным способом</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary text-primary-foreground pixel-corners flex items-center justify-center font-black flex-shrink-0">4</div>
                  <p>Привилегия автоматически выдаётся в течение 1 минуты!</p>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === 'forum' && (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-5xl font-black mb-4 text-shadow-pixel text-foreground">💬 ФОРУМ</h2>
              <p className="text-xl font-semibold text-muted-foreground">Общайтесь с игроками сервера</p>
            </div>

            <div className="grid gap-4">
              {[
                { title: 'Объявления администрации', posts: 24, category: 'admin', icon: '📢' },
                { title: 'Новости сервера', posts: 156, category: 'news', icon: '📰' },
                { title: 'Общение игроков', posts: 892, category: 'chat', icon: '💭' },
                { title: 'Помощь новичкам', posts: 234, category: 'help', icon: '❓' },
                { title: 'Жалобы на игроков', posts: 67, category: 'reports', icon: '⚠️' },
                { title: 'Предложения по серверу', posts: 145, category: 'suggestions', icon: '💡' },
              ].map((forum) => (
                <Card key={forum.category} className="pixel-corners border-4 border-primary/20 bg-white/95 hover:bg-primary/5 transition-colors cursor-pointer">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 bg-muted pixel-corners flex items-center justify-center text-3xl">
                          {forum.icon}
                        </div>
                        <div>
                          <CardTitle className="text-2xl font-black">{forum.title}</CardTitle>
                          <CardDescription className="font-semibold">
                            {forum.posts} сообщений
                          </CardDescription>
                        </div>
                      </div>
                      <Icon name="ChevronRight" className="h-8 w-8 text-muted-foreground" />
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'rules' && (
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-5xl font-black mb-4 text-shadow-pixel text-foreground">📜 ПРАВИЛА СЕРВЕРА</h2>
              <p className="text-xl font-semibold text-muted-foreground">Соблюдай правила - играй с удовольствием!</p>
            </div>

            <Card className="pixel-corners border-4 border-minecraft-redstone/50 bg-red-50">
              <CardHeader>
                <CardTitle className="text-2xl font-black text-minecraft-redstone">⚠️ Незнание правил не освобождает от ответственности!</CardTitle>
              </CardHeader>
            </Card>

            <div className="space-y-4">
              <Card className="pixel-corners border-4 border-primary/30 bg-white/95">
                <CardHeader>
                  <CardTitle className="text-2xl font-black">1️⃣ Общие правила</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 font-semibold">
                  <p>• Запрещены читы, моды дающие преимущества, X-Ray</p>
                  <p>• Запрещено использование багов и дюпов</p>
                  <p>• Запрещена реклама других серверов</p>
                  <p>• Запрещён обход бана с других аккаунтов</p>
                </CardContent>
              </Card>

              <Card className="pixel-corners border-4 border-primary/30 bg-white/95">
                <CardHeader>
                  <CardTitle className="text-2xl font-black">2️⃣ Правила чата</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 font-semibold">
                  <p>• Запрещён мат, оскорбления, унижения</p>
                  <p>• Запрещён флуд и спам в чате</p>
                  <p>• Запрещён троллинг и провокации</p>
                  <p>• Уважайте администрацию и игроков</p>
                </CardContent>
              </Card>

              <Card className="pixel-corners border-4 border-primary/30 bg-white/95">
                <CardHeader>
                  <CardTitle className="text-2xl font-black">3️⃣ Игровой процесс</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 font-semibold">
                  <p>• Запрещён гриф чужих построек</p>
                  <p>• Запрещена кража из сундуков других игроков</p>
                  <p>• Запрещено убийство на спавне и в безопасных зонах</p>
                  <p>• Стройте вдали от других игроков (мин. 100 блоков)</p>
                </CardContent>
              </Card>

              <Card className="pixel-corners border-4 border-primary/30 bg-white/95">
                <CardHeader>
                  <CardTitle className="text-2xl font-black">4️⃣ Наказания</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 font-semibold">
                  <p>🔇 Мут - за нарушение правил чата (1ч - навсегда)</p>
                  <p>⚠️ Кик - предупреждение за лёгкие нарушения</p>
                  <p>🚫 Бан временный - за серьёзные нарушения (1д - 30д)</p>
                  <p>❌ Бан навсегда - за использование читов, серьёзный гриф</p>
                </CardContent>
              </Card>

              <Card className="pixel-corners border-4 border-minecraft-emerald/50 bg-green-50">
                <CardHeader>
                  <CardTitle className="text-2xl font-black text-minecraft-grass">✅ Приятной игры!</CardTitle>
                </CardHeader>
                <CardContent className="font-semibold">
                  <p>Соблюдая эти простые правила, вы помогаете создать дружелюбную атмосферу на сервере. Удачи в игре! 🎮</p>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </main>

      <footer className="bg-secondary/95 backdrop-blur-sm border-t-4 border-secondary-foreground/20 mt-16 py-8">
        <div className="container mx-auto px-4 text-center text-white">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-10 bg-minecraft-grass pixel-corners flex items-center justify-center text-xl">
              ⛏️
            </div>
            <h3 className="text-xl font-black">ALFATIME 2024</h3>
          </div>
          <p className="font-semibold opacity-90">Лучший сервер для твоих приключений</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;