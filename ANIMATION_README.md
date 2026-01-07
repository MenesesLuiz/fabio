# Animações Suaves - Dr. Fábio Dolzany

Este projeto implementa animações suaves que respondem ao scroll do usuário, criando uma experiência visual envolvente onde os elementos aparecem quando o usuário desce a página e desaparecem quando sobe.

## Componentes de Animação

### 1. ScrollAnimation
Componente principal para animações baseadas em scroll.

```tsx
<ScrollAnimation 
  direction="up" // 'up', 'down', 'left', 'right', 'fade'
  delay={0.2} 
  duration={0.6}
  threshold={0.1}
  triggerOnce={false}
  distance={50}
>
  <div>Conteúdo aqui</div>
</ScrollAnimation>
```

### 2. StaggeredAnimation
Para animar vários elementos em sequência.

```tsx
<StaggeredAnimation 
  staggerDelay={0.1}
  direction="up"
  duration={0.6}
>
  {items.map(item => <div key={item.id}>{item.content}</div>)}
</StaggeredAnimation>
```

### 3. CardGridAnimation
Animação especializada para grids de cards.

```tsx
<CardGridAnimation
  columns={3}
  staggerDelay={0.1}
  threshold={0.1}
>
  {cards.map(card => <Card key={card.id}>{card.content}</Card>)}
</CardGridAnimation>
```

### 4. HoverAnimation
Animações de hover suaves.

```tsx
<HoverAnimation scale={1.05} y={-5}>
  <Button>Hover me!</Button>
</HoverAnimation>
```

### 5. FloatingAnimation
Efeito flutuante contínuo.

```tsx
<FloatingAnimation duration={4} intensity={8}>
  <div>Elemento flutuante</div>
</FloatingAnimation>
```

### 6. TypewriterAnimation
Efeito de texto aparecer letra por letra.

```tsx
<TypewriterAnimation 
  text="Texto que aparece letra por letra"
  speed={0.1}
  delay={0.5}
/>
```

### 7. SlideInText
Texto que desliza para dentro da tela.

```tsx
<SlideInText 
  text="Texto deslizante"
  direction="left"
  duration={0.8}
/>
```

## Hook useScrollAnimation

Hook personalizado para detectar quando elementos entram na viewport:

```tsx
const { ref, isVisible } = useScrollAnimation({
  threshold: 0.1,
  rootMargin: '0px',
  triggerOnce: false
})
```

## Configurações de Performance

O arquivo `lib/animation-config.ts` contém configurações otimizadas para diferentes tipos de animação:

- `springConfig`: Configurações para animações tipo mola
- `easeConfig`: Configurações para animações com easing suave
- `fadeInVariants`: Variantes para fade in
- `slideUpVariants`: Variantes para slide up
- `scaleInVariants`: Variantes para scale in

## Características Principais

✅ **Responsivo ao scroll**: Elementos aparecem quando visíveis e desaparecem quando saem da viewport  
✅ **Suave e otimizado**: Usa Framer Motion para animações performáticas  
✅ **Configurável**: Múltiplas opções de direção, timing e easing  
✅ **Acessível**: Respeita preferências de movimento reduzido  
✅ **TypeScript**: Totalmente tipado para melhor DX  

## Tecnologias Utilizadas

- **Framer Motion**: Biblioteca de animações React
- **Intersection Observer API**: Para detecção de elementos na viewport
- **TypeScript**: Para tipagem estática
- **Tailwind CSS**: Para estilos responsivos

## Como Funciona

1. O hook `useScrollAnimation` usa a Intersection Observer API para detectar quando elementos entram/saem da viewport
2. Os componentes de animação envolvem o conteúdo e aplicam transformações CSS via Framer Motion
3. As animações são configuradas para serem suaves e responsivas
4. Elementos aparecem com animações quando o usuário rola para baixo e desaparecem quando rola para cima (a menos que `triggerOnce` seja true)

## Benefícios

- **Experiência do usuário aprimorada**: Movimento suave e intuitivo
- **Engagement aumentado**: Usuários ficam mais tempo na página
- **Profissionalismo**: Visual moderno e polido
- **Performance otimizada**: Animações eficientes que não comprometem a velocidade
