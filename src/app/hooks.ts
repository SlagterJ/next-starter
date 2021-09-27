import {
  useDispatch as _useDispatch,
  TypedUseSelectorHook,
  useSelector as _useSelector,
} from "react-redux";
import { AppDispatch, RootState } from "./store";

/** Typesafe version of useDispatch from react-redux */
export const useDispatch = () => _useDispatch<AppDispatch>();
/** Typesafe version of useSelector from react-redux */
export const useSelector: TypedUseSelectorHook<RootState> = _useSelector;
