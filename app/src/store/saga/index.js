import watchApplication from './application';

export default function* rootSaga() {
	yield* [ watchApplication() ]
}
  