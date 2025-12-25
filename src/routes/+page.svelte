<script lang="ts">
	import aivaraIconUrl from './assets/aivara.png';
</script>

<article>
	<p>Welcome to AIVARA - A collection of AI tools.</p>
	<div class="products">
		<a href="#tools" class="item">
			<div class="product-item-content">
				<img src={aivaraIconUrl} width="32px" height="32px" alt="Aivara" />
				<div class="text">
					<strong>Coming Soon</strong><br />
					More AI tools will be added here.
				</div>
			</div>
		</a>
	</div>
</article>

<style>
	.products .item {
		padding: 16px;
		text-align: center;
		box-sizing: border-box;
		text-decoration: none;
		color: rgba(0, 0, 0, 0.6);
		font-size: 12px;
		line-height: 1.5;
		font-weight: 600;
		transition: all 0.2s;
		border: dashed 1px rgba(33, 53, 71, 0.5);
	}

	.products .item:hover {
		color: rgba(0, 0, 0, 0.8);
		border: solid 1px rgba(33, 53, 71, 1);
	}

	.products .item .product-item-content {
		display: flex;
		align-items: center;
	}

	.products .item .product-item-content .text {
		flex: 1;
		text-align: left;
		margin-left: 12px;
	}

	@media (max-width: 700px) {
		.products .item {
			display: flex;
			margin: 16px 0;
			font-size: 14px;
		}
	}

	@media (min-width: 700px) {
		.products {
			text-align: center;
		}

		.products .item {
			display: inline-block;
			width: 250px;
			margin: 16px;
		}
	}
</style>
