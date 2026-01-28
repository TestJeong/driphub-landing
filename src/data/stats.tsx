import {PiCloudCheckFill,  PiSquaresFourFill, PiTagFill} from "react-icons/pi";

import { IStats } from "@/types";

export const stats: IStats[] = [
    {
        title: "카테고리",
        icon: <PiTagFill size={34} className="text-blue-500" />,
        description: "원두 기록을 홈카페·여행·카페로 나눠, 필요한 기록을 빠르게 찾을 수 있습니다."
    },
    {
        title: "다양한 아이콘",
        icon: <PiSquaresFourFill size={34} className="text-yellow-500" />,
        description: "드리퍼와 그라인더를 아이콘으로 선택해, 어떤 장비를 썼는지 한눈에 확인할 수 있습니다."
    },
    {
        title: "아이클라우드",
        icon: <PiCloudCheckFill size={34} className="text-green-600" />,
        description: "기록은 iCloud로 동기화되어, 기기를 바꿔도 그대로 이어서 볼 수 있습니다."
    }
];