import ThemedButton from "@/presentation/shared/ThemedButton";
import ThemedText from "@/presentation/shared/ThemedText";
import ThemedView from "@/presentation/shared/ThemedView";
import { router } from "expo-router";
import { useRef, useState } from "react";
import {
  FlatList,
  Image,
  ImageSourcePropType,
  NativeScrollEvent,
  NativeSyntheticEvent,
  useWindowDimensions,
} from "react-native";
interface Slide {
  title: string;
  desc: string;
  img?: ImageSourcePropType;
}

const items: Slide[] = [
  {
    title: "Titulo 1",
    desc: "Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.",
    img: require("../../assets/images/slides/slide-1.png"),
  },
  {
    title: "Titulo 2",
    desc: "Anim est quis elit proident magna quis cupidatat curlpa labore Lorem ea. Exercitation mollit velit in aliquip tempor occaecat dolor minim amet dolor enim cillum excepteur. ",
    img: require(`../../assets/images/slides/slide-2.png`),
  },
  {
    title: "Titulo 3",
    desc: "Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.",
    img: require(`../../assets/images/slides/slide-3.png`),
  },
];
const SlidesScreen = () => {
  const flatListRef = useRef<FlatList>(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isScrollEnabled, setIsScrollEnabled] = useState(false);

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (isScrollEnabled) {
      return;
    }
    const { contentOffset, layoutMeasurement } = event.nativeEvent;

    const currentIndex = Math.floor(contentOffset.x / layoutMeasurement.width);

    setCurrentSlideIndex(currentIndex > 0 ? currentIndex : 0);

    if (currentIndex === items.length - 1) {
      setIsScrollEnabled(true);
    }
  };

  const scrollToSlide = (index: number) => {
    if (!flatListRef.current) return;
    flatListRef.current.scrollToIndex({
      index: index,
      animated: true,
    });
  };
  return (
    <ThemedView className="">
      <FlatList
        data={items}
        ref={flatListRef}
        renderItem={({ item }) => <SlideItem item={item} />}
        horizontal
        pagingEnabled
        contentContainerStyle={{ alignItems: "center" }}
        showsHorizontalScrollIndicator={false}
        scrollEnabled={isScrollEnabled}
        onScroll={onScroll}
      />

      {currentSlideIndex === items.length - 1 ? (
        <ThemedButton
          onPress={() => router.dismiss()}
          className="absolute bottom-10 right-5 w-[150px]"
        >
          Finalizar
        </ThemedButton>
      ) : (
        <ThemedButton
          onPress={() => scrollToSlide(currentSlideIndex + 1)}
          className="absolute bottom-10 right-5 w-[150px]"
        >
          Siguiente
        </ThemedButton>
      )}
    </ThemedView>
  );
};
export default SlidesScreen;

interface SlideItemProps {
  item: Slide;
}

const SlideItem = ({ item }: SlideItemProps) => {
  const { width } = useWindowDimensions();
  const { title, desc, img } = item;

  const textWidth = width - 80;

  return (
    <ThemedView style={{ width, justifyContent: "center" }}>
      <Image
        source={img}
        style={{
          width: width * 0.7,
          height: width * 0.7,
          resizeMode: "contain",
          alignSelf: "center",
          marginBottom: 20,
        }}
      ></Image>

      <ThemedView style={{ width: textWidth, backgroundColor: "transparent" }}>
        <ThemedText
          type="h1"
          className="text-light-primary dark:text-dark-primary"
        >
          {title}
        </ThemedText>
        <ThemedText style={{ flexShrink: 2 }}>{desc}</ThemedText>
      </ThemedView>
    </ThemedView>
  );
};
