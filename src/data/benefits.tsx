import {
    FiArchive,
    FiBookOpen,
    FiCalendar,
    FiCoffee,
    FiCopy,
    FiEdit3,
    FiFileText,
    FiGrid,
    FiHeart,
    FiLock,
    FiPieChart,
    FiSearch,
    FiShare2,
    FiSliders,
    FiTag,
} from "react-icons/fi";

import { IBenefit } from "@/types";

export const benefits: IBenefit[] = [
    {
        title: "원두 기록을 한눈에 관리",
        description: "마셔본 원두를 흩어두지 않고 상황별로 정리해 다시 참고하기 쉽게 관리할 수 있습니다.",
        bullets: [
            {
                title: "상황별 분류",
                description: "홈카페, 여행, 카페로 나뉘어 기록되어 어디서 마신 원두인지 바로 구분할 수 있습니다.",
                icon: <FiGrid size={26} />,
            },
            {
                title: "원두 기록 누적",
                description: "마신 원두가 계속 쌓여 자주 마시는 타입이 자연스럽게 드러납니다.",
                icon: <FiArchive size={26} />,
            },
            {
                title: "이전 기록 참고",
                description: "과거에 마셨던 원두를 다시 확인해 다음 원두 선택에 참고할 수 있습니다",
                icon: <FiSearch size={26} />,
            },
        ],
        imageSrc: "/images/mockup-1.png",
    },
    {
        title: "테이스팅과 추출 조건 기록",
        description: "한 잔의 맛과 추출 조건을 함께 기록해, 레시피의 맥락을 남길 수 있습니다.",
        bullets: [
            {
                title: "추출 조건 정리",
                description: "물 온도, 추출 시간, 분쇄도 등 기본 조건을 함께 남겨 다음에 참고하기 쉽습니다.",
                icon: <FiSliders size={26} />,
            },
            {
                title: "테이스팅 태그 기록",
                description: "구운 호두, 다크 초콜릿 같은 섬세한 맛표현을 태그로 선택해 간단하게 기록할 수 있습니다",
                icon: <FiTag size={26} />,
            },
            {
                title: "아이콘으로 장비 선택",
                description: "드리퍼와, 그라인더를 아이콘으로 선택해, 어떤 장비를 썼는지 바로 확인할 수 있습니다.",
                icon: <FiCoffee size={26} />,
            },
        ],
        imageSrc: "/images/mockup-2.png",
    },
    {
        title: "레시피 저장과 상세 기록",
        description: "레시피를 저장하고, 차트와 메모로 추출 과정을 자세히 남길 수 있습니다.",
        bullets: [
            {
                title: "레시피 저장",
                description: "잘 나온 레시피를 저장해두고, 다음 추출에서 그대로 참고할 수 있습니다.",
                icon: <FiBookOpen size={26} />,
            },
            {
                title: "차트 기록",
                description: "맛의 균형을 차트에 기록하여, 한 잔의 방향을 정리할 수 있습니다.",
                icon: <FiPieChart size={26} />,
            },
            {
                title: "메모로 추출 포인트 기록",
                description: "추출 과정에서 남기고 싶은 포인트를 메모로 자유롭게 기록할 수 있습니다.",
                icon: <FiEdit3 size={26} />,
            },
        ],
        imageSrc: "/images/mockup-3.png",
    },
    {
        title: "레시피 공유",
        description: "기록된 레시피를 정리된 이미지 카드 형태로 바로 공유할 수 있습니다.",
        bullets: [
            {
                title: "텍스트 정리 불필요",
                description: "원두와 레시피가 자동으로 정리되어 복사하거나 다시 쓸 필요가 없습니다.",
                icon: <FiCopy size={26} />,
            },
            {
                title: "카드 형태 공유",
                description: "한 장의 이미지 카드로 만들어져 어디서든 같은 형태로 전달됩니다.",
                icon: <FiFileText size={26} />,
            },
            {
                title: "다양한 종류의 카드",
                description: "추출 레시피 부터 간단한 정보까지 원하는 종류를 선택하여 공유할 수 있습니다.",
                icon: <FiShare2 size={26} />,
            },
        ],
        imageSrc: "/images/mockup-4.png",
    },
];